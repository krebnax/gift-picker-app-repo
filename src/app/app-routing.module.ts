import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'friend-detail',
    children: [
      {
        path: ':friendId',
        loadChildren: () =>
          import('./friend-detail/friend-detail.module').then(
            (m) => m.FriendDetailPageModule
          ),
      },
    ],
  },
  {
    path: 'survey',
    loadChildren: () =>
      import('./survey/survey.module').then((m) => m.SurveyPageModule),
  },
  {
    path: 'add-friend',
    loadChildren: () => import('./add-friend/add-friend.module').then( m => m.AddFriendPageModule)
  },
  {
    path: 'gift-modal',
    loadChildren: () => import('./gift-modal/gift-modal.module').then( m => m.GiftModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
