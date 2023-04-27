# asyncy

Are you tired of null checks with `async` pipe ? use `asyncy`

# what is asyncy

`asyncy` pipe is a wrapper around `async` pipe, with small addition. it returns `T` type instead of `T | null` . So it avoids `*ngIf` checks when you need to use it in template or pass async data in children components

# getting started

`async` pipe is standalone, so in order to use it, you need to import it inside component or in module.

## module

```  
@NgModule({
    imports:[
        AsyncyPipe
    ]
  })
  export class SomeModule{}
  ```

## component

```  
@Component({
    selector:'some-component',
    imports:[AsyncyPipe]
  })
```

# usage

it has the same usage as `async` pipe
`<h1> {{someAsyncData$ | asyncy}} </h1>`

# differnce between async and asyncy pipe

Let's imagine we have user data that we want to pass from `AppComponent` to `UsersComponent` with async pipe it looks like this

```
@Component({
selector:'app-component',
imports:[AsyncyPipe],
template:"
<ng-container *ngIf="users$ | async as users">
<app-users [users]="users"> </app-users>
</ng-container>
"
})
export class AppComponent{
users$= this.userService.getAll();

}
```
we need to add `*ngIf` directive because `async` pipe returns `null` type and without this check it wont compile. It's an observable hence this is natural return type, because it might have no data upon initialization. But in lots of cases we know that we will have data, so adding `*ngIf` check only for the compilation fix creates additional elements in templates. In order to avoid that we can use `asyncy` pipe. <br>
Internally it uses `async` pipe so you can rely on it as you would rely on `async` pipe. The small difference is that it returns only `T` type instead of `T | null`. So there's no need to use `*ngIf` directive. Our example transforms into this

```
@Component({
selector:'app-component',
imports:[AsyncyPipe],
template:"
<app-users [users]="users$ | asyncy"> </app-users>
"
})
export class AppComponent{
users$= this.userService.getAll();

}
```