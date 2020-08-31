import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CpfValidator } from '../validators/cpf-validator';
import { ComparacaoValidator } from '../validators/comparacao-validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14),
        CpfValidator.cpfValido
      ])],
      dataNascimento: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      genero: ['', Validators.compose([Validators.required])],
      celular: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(16)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

    }, {
      validators: ComparacaoValidator('senha', 'confirmaSenha')
    });
  }


  public formRegistro: FormGroup;


  mensagens_validacao = {

    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O CPF deve ter pelo menos 11 caracteres.' },
      { tipo: 'maxlength', mensagem: 'O CPF deve ter no máximo 14 caracteres.' },
      { tipo: 'invalido', mensagem: 'CPF inválido!'},
    ],
    dataNascimento: [
      { tipo: 'required', mensagem: 'O campo Data de nascimento é obrigatório.' },
    ],
    genero: [
      { tipo: 'required', mensagem: 'Escolha um gênero.' },
    ],
    celular: [
      { tipo: 'minlength', mensagem: 'O celular deve ter pelo menos 10 caracteres.' },
      { tipo: 'maxlength', mensagem: 'O celular deve ter no máximo 16 caracteres.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'email', mensagem: 'E-mail inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlenght', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlenght', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha!' }
    ]
  }

  ngOnInit() {
  }

}
