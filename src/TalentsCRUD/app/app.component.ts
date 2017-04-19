import { Component } from '@angular/core';

@Component({
    selector: 'easy-app',
    template: `<nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Talents Easy Com. Tech.</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a routerLink="/inicial">Inicial</a></li>
          <li><a routerLink="/candidatos">Candidato</a></li>
          <li><a routerLink="/vagas">Vagas</a></li>
          <li><a href="swagger/ui/index.html">Documentação Web API</a></li>
        </ul>
      </div>
    </div>
   </nav>
   <router-outlet></router-outlet>`
})
export class AppComponent {}
