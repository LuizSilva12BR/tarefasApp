"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.mensagens_validacao = {
            email: [
                { tipo: 'required', mensagem: 'O campo E-mail é obrigatório!' },
                { tipo: 'email', mensagem: 'E-mail inválido!' }
            ],
            senha: [
                { tipo: 'required', mensagem: 'O campo senha é obrigatório!' },
                { tipo: 'minLength', mensagem: 'A senha deve ter pelo menos 6 caracteres!' }
            ]
        };
        this.formLogin = formBuilder.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            senha: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        if (this.formLogin.valid) {
            console.log('formulário válido!');
            this.router.navigateByUrl('/home');
        }
        else {
            console.log('formulário inválido!');
        }
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
