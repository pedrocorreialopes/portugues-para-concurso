/* Login, cadastro e recuperação de senha (armazenamento local) */
(function () {
  'use strict';
  var PPC = window.PPC;

  function erro(hostSel, msg) {
    var el = PPC.qs(hostSel);
    if (!el) { PPC.toast(msg, 'err'); return; }
    el.hidden = false;
    el.className = 'feedback err';
    el.innerHTML = '<h4>' + PPC.icon('warn').replace('<svg', '<svg style="width:15px;height:15px;display:inline;vertical-align:-2px"') + ' Não foi possível continuar</h4><p style="margin:0">' + PPC.esc(msg) + '</p>';
  }
  function limparErro(hostSel) {
    var el = PPC.qs(hostSel);
    if (el) { el.hidden = true; el.innerHTML = ''; }
  }

  function initLogin() {
    var form = PPC.qs('#formLogin');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      limparErro('#erroLogin');
      var email = PPC.qs('#email').value;
      var senha = PPC.qs('#senha').value;
      if (!email || !senha) { erro('#erroLogin', 'Preencha e-mail e senha.'); return; }
      var res = PPC.login(email, senha);
      if (!res.ok) { erro('#erroLogin', res.error); return; }
      PPC.toast('Bem-vindo de volta, ' + res.name.split(' ')[0] + '!', 'ok');
      setTimeout(function () { location.href = 'progresso.html'; }, 500);
    });

    PPC.qs('#linkEsqueci').addEventListener('click', function (e) {
      e.preventDefault();
      var m = PPC.openModal(
        '<h2>Redefinir senha neste dispositivo</h2>' +
        '<p style="font-size:.9rem;color:var(--muted)">Esta plataforma não envia e-mails: o cadastro fica apenas neste navegador. Informe o seu e-mail cadastrado e defina uma nova senha.</p>' +
        '<div class="field"><label for="recEmail">E-mail cadastrado</label><input class="input" type="email" id="recEmail" placeholder="seu@email.com"></div>' +
        '<div class="field"><label for="recSenha">Nova senha</label><input class="input" type="password" id="recSenha" placeholder="Mínimo de 6 caracteres"></div>' +
        '<div id="recErro" hidden></div>' +
        '<div class="modal-actions"><button class="btn btn-outline" data-modal-close>Cancelar</button>' +
        '<button class="btn btn-primary" type="button" id="recSalvar">Definir nova senha</button></div>',
        { label: 'Redefinir senha' });
      m.root.querySelector('#recSalvar').addEventListener('click', function () {
        var email = m.root.querySelector('#recEmail').value;
        var senha = m.root.querySelector('#recSenha').value;
        if (!PPC.resetPassword(email)) {
          var el = m.root.querySelector('#recErro');
          el.hidden = false; el.className = 'feedback err';
          el.innerHTML = '<p style="margin:0">Não encontramos esse e-mail neste dispositivo. Verifique a grafia ou crie uma nova conta.</p>';
          return;
        }
        var r = PPC.changePassword(email, senha);
        if (!r.ok) {
          var el2 = m.root.querySelector('#recErro');
          el2.hidden = false; el2.className = 'feedback err';
          el2.innerHTML = '<p style="margin:0">' + PPC.esc(r.error) + '</p>';
          return;
        }
        m.close();
        PPC.toast('Senha redefinida. Entre com a nova senha.', 'ok');
      });
    });
  }

  function initCadastro() {
    var form = PPC.qs('#formCadastro');
    if (!form) return;
    var senha = PPC.qs('#senha');
    senha.addEventListener('input', function () {
      var v = senha.value;
      var hint = PPC.qs('#forcaSenha');
      if (!v) { hint.textContent = 'Use pelo menos 6 caracteres.'; return; }
      var forca = 0;
      if (v.length >= 6) forca++;
      if (v.length >= 10) forca++;
      if (/[A-Z]/.test(v) && /[a-z]/.test(v)) forca++;
      if (/[0-9]/.test(v)) forca++;
      if (/[^A-Za-z0-9]/.test(v)) forca++;
      var labels = ['Muito fraca', 'Fraca', 'Razoável', 'Boa', 'Forte', 'Muito forte'];
      hint.textContent = 'Força da senha: ' + labels[Math.min(forca, 5)];
      hint.style.color = forca <= 1 ? 'var(--red-500)' : (forca <= 3 ? '#8a6400' : 'var(--green-500)');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      limparErro('#erroCadastro');
      var nome = PPC.qs('#nome').value;
      var email = PPC.qs('#email').value;
      var s1 = senha.value;
      var s2 = PPC.qs('#senha2').value;
      var aceite = PPC.qs('#aceite').checked;
      if (!aceite) { erro('#erroCadastro', 'É necessário aceitar o tratamento de dados para criar a conta (LGPD).'); return; }
      if (s1 !== s2) { erro('#erroCadastro', 'As senhas não coincidem.'); return; }
      var res = PPC.register(nome, email, s1);
      if (!res.ok) { erro('#erroCadastro', res.error); return; }
      PPC.toast('Conta criada! Bem-vindo, ' + nome.trim().split(' ')[0] + '.', 'ok');
      setTimeout(function () { location.href = 'progresso.html'; }, 600);
    });
  }

  function init() {
    initLogin();
    initCadastro();
    // se já estiver logado em página de login/cadastro, avisa
    if (PPC.isLogged() && (PPC.qs('#formLogin') || PPC.qs('#formCadastro'))) {
      var u = PPC.user();
      PPC.toast('Você já está conectado como ' + u.name.split(' ')[0] + '. Redirecionando ao painel…', 'ok');
      setTimeout(function () { location.href = 'progresso.html'; }, 1600);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
