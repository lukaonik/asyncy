import { AsyncPipe } from '@angular/common';
import { OnDestroy, Pipe } from '@angular/core';
import { ChangeDetectorRef, inject, PipeTransform } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';

@Pipe({
  name: 'asyncy',
  pure: true,
  standalone: true,
})
export class AsyncyPipe implements PipeTransform, OnDestroy {
  asyncPipe = new AsyncPipe(inject(ChangeDetectorRef));

  transform<T>(obj: Observable<T> | Subscribable<T> | Promise<T>): T;
  transform<T>(obj: null | undefined): null;
  transform<T>(
    obj: Observable<T> | Subscribable<T> | Promise<T> | null | undefined
  ): T;
  transform<T>(
    obj: Observable<T> | Subscribable<T> | Promise<T> | null | undefined
  ): T {
    return this.asyncPipe.transform(obj) as T;
  }

  ngOnDestroy(): void {
    this.asyncPipe.ngOnDestroy();
  }
}
