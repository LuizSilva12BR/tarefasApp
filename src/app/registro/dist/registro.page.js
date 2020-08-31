"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistroPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var cpf_validator_1 = require("../validators/cpf-validator");
var comparacao_validator_1 = require("../validators/comparacao-validator");
var RegistroPage = /** @class */ (function () {
    function RegistroPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.mensagens_validacao = {
            nome: [
                { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
                { tipo: 'minLength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
            ],
            cpf: [
                { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
                { tipo: 'minLength', mensagem: 'O CPF deve ter pelo menos 11 caracteres.' },
                { tipo: 'maxLength', mensagem: 'O CPF deve ter no máximo 14 caracteres.' },
                { tipo: 'invalido', mensagem: 'CPF inválido!' },
            ],
            dataNascimento: [
                { tipo: 'required', mensagem: 'O campo Data de nascimento é obrigatório.' },
            ],
            genero: [
                { tipo: 'required', mensagem: 'Escolha um gênero.' },
            ],
            celular: [
                { tipo: 'minLength', mensagem: 'O celular deve ter pelo menos 10 caracteres.' },
                { tipo: 'maxLength', mensagem: 'O celular deve ter no máximo 16 caracteres.' },
            ],
            email: [
                { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
                { tipo: 'email', mensagem: 'E-mail inválido.' },
            ],
            senha: [
                { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
                { tipo: 'minLenght', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
            ],
            confirmaSenha: [
                { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
                { tipo: 'minLenght', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
                { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha!' }
            ]
        };
        this.formRegistro = formBuilder.group({
            nome: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            cpf: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(11),
                    forms_1.Validators.maxLength(14),
                    cpf_validator_1.CpfValidator.cpfValido
                ])],
            dataNascimento: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            genero: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            celular: ['', forms_1.Validators.compose([forms_1.Validators.minLength(10), forms_1.Validators.maxLength(16)])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            senha: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            confirmaSenha: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])]
        }, {
            validators: comparacao_validator_1.ComparaValidator('senha', 'confirmaSenha')
        });
    }
    RegistroPage.prototype.ngOnInit = function () {
    };
    RegistroPage = __decorate([
        core_1.Component({
            selector: 'app-registro',
            templateUrl: './registro.page.html',
            styleUrls: ['./registro.page.scss']
        })
    ], RegistroPage);
    return RegistroPage;
}());
exports.RegistroPage = RegistroPage;
