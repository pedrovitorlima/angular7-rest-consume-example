
# Simple Angular7 and Bootstrap CRUD

Hey you! This is a simple project that make use of Angular7 to consume rest services and create/list a simple product with price. Besides simple, here we have some interesting things that maybe can help others.

##Table of Contents
- [Tools](#tools)
- [Bootstrap Alert Service and Component](#bootstrap-alert)
- [JWT Interceptors](#jwt)
- [Sprint Boot Rest Errors Messages Integration](#spring-boot)
- [Rest Consume](#rest-consume)

## <a href="#tools">Tools</a>
#### <a href="#bootstrap-alert">Bootstrap Alert Service and Component</a>
The `alert.components.ts` and `alert.service.ts` files provides a component and service to handle bootstrap alert messages.  Instead of handling error messages from your rest service, with this you can just use `AlertService.errorAlert(<any>messages[])` inside your component. Take a look inside `create-product.component.ts` to view a full example.

#### <a href="#jwt">JWT Interceptors</a>
@todo

#### <a href="#spring-boot">Spring Boot Rest Error Messages Integration</a>

@todo

## <a href="#rest-consume">Rest Consume</a>
This project make use of this Spring Boot Rest Service: 
<a href="github.com/pedrovitorlima/spring-boot-rest-angular7-integration">spring-boot-rest-angular7-integration</a>