
# Angular7 and Bootstrap CRUD

Hey you! This is a simple project that make use of Angular7 to consume rest services and create/list a simple product with price. Besides simple, here we have some interesting things that maybe can help others.

## Table of Contents
- [Bootstrap Alert Service and Component](#bootstrap-alert)
- [Bootstrap Angular Datatable](#bootstrap-angular-datatable)
- [JWT Interceptors](#jwt)
- [Sprint Boot Rest Errors Messages Integration](#spring-boot)
- [Rest Consume](#rest-consume)

## <a href="#bootstrap-alert">Bootstrap Alert Service and Component</a>
The `alert.components.ts` and `alert.service.ts` files provides a component and service to handle bootstrap alert messages.  Instead of handling error messages from your rest service, with this you can just use `AlertService.errorAlert(<any>messages[])` inside your component. Take a look inside `create-product.component.ts` to view a full example.

## <a href="#bootstrap-angular-datatable">Bootstrap Angular Datatable</a>
This application make use of angular-datatables component. The datatables.net-bs4 make integration with bootstrap stype. For this, was necessary to edit `app.module.ts` to import `DataTablesModule` and add some elements on style and js attributes inside angular.json (take a look to understand). The `list-product.component.html` has a example. This is the dependencies that I used for:

- npm install jquery --save
- npm install datatables.net --save
- npm install angular-datatables --save
- npm install --save datatables.net-bs4
- npm install @types/jquery --save-dev
- npm install @types/datatables.net --save-dev

## <a href="#jwt">JWT Interceptors</a>
@todo

## <a href="#spring-boot">Spring Boot Rest Error Messages Integration</a>

@todo

## <a href="#rest-consume">Rest Consume</a>
This project make use of this Spring Boot Rest Service: 
<a href="http://github.com/pedrovitorlima/spring-boot-rest-angular7-integration">spring-boot-rest-angular7-integration</a>  