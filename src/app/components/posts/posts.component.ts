import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort } from '@angular/material';
import { timer, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/core/store/state/app.state';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Post } from 'src/app/core/interfaces/post.interface';
import { Algolia } from 'src/app/core/interfaces/algolia.interface';
import { GetPostsStart, ViewPostStart } from 'src/app/core/store/actions/posts.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts: Post[] = [];
  algoliaResponse: Algolia;
  displayedColumns: string[] = ['title', 'author', 'url', 'created_at'];
  interval: Observable<number> = timer(0, 1000 * 10);
  dataSource;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _store: Store<IAppState>
  ) { }

  ngOnInit() {
    // Init interval
    this.interval.subscribe(data => {
      this._store.dispatch(new GetPostsStart());
    });
    this._store.select('postsData').subscribe(data => {
      if (data.algoliaResponse) {
        this.algoliaResponse = data.algoliaResponse;
        this.posts = data.algoliaResponse.hits || [];
        this.dataSource = new MatTableDataSource(this.posts);
        // Datatable sorting 
        this.dataSource.sort = this.sort;
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(data) {
    this._dialog.open(ModalComponent);
    this._store.dispatch(new ViewPostStart({ data }));
  }

}
