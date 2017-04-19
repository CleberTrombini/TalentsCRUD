/**
 * Teste do componente utilitário para exibir os links de
 * paginação para uma tabela HTML.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.2
 */
"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/router/testing');
var forms_1 = require('@angular/forms');
var _1 = require('./');
describe('DemoComponent', function () {
    var fixture;
    var comp;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                _1.KzPaginacaoComponent
            ],
            imports: [
                testing_2.RouterTestingModule.withRoutes([{ path: '', component: _1.KzPaginacaoComponent }]),
                forms_1.FormsModule
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(_1.KzPaginacaoComponent);
        comp = fixture.componentInstance;
    });
    it('deve criar o componente', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=kz-paginacao.component.spesc.js.map