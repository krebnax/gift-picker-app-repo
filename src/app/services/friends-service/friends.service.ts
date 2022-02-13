import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Friend } from 'src/app/models/friend';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private friends = new BehaviorSubject<Friend[]>([
    { id: 1, firstName: 'Sanberk', lastName: 'Aksungur', hasGift: true },
  ]);

  constructor() {}

  getAll(): Observable<Friend[]> {
    return this.friends.asObservable();
  }

  getOne(id: number): Observable<Friend> {
    return this.friends.pipe(
      take(1),
      map(friends => friends.find(x => x.id === id))
    );
  }

  insert(entity: Friend): void {
    this.friends.pipe(take(1)).subscribe((friends) => {
      const friend: Friend = {
        id: friends.length > 0 ? friends[friends.length - 1].id + 1 : 0,
        firstName: entity.firstName,
        lastName: entity.lastName,
        hasGift: false,
      };
      this.friends.next(friends.concat(friend));
    });
  }

  delete(id: number): void {
    this.friends.pipe(take(1)).subscribe((friends) => {
      this.friends.next(friends.filter((x) => x.id !== id));
    });
  }

}
