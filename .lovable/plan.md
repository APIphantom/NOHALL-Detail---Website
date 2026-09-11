# Plano: experiência e acabamento antes do backend

## Objetivo
Elevar a qualidade percebida e a usabilidade das páginas principal e Marketing sem banco de dados, login ou integrações de servidor, preservando a estrutura e o design system atuais.

## Implementação priorizada

1. **Navegação refinada**
   - Destacar a página e a seção atualmente visíveis no menu.
   - Melhorar o comportamento das âncoras com compensação do cabeçalho fixo.
   - Fechar o menu mobile com tecla Escape, clique externo e mudança de página.
   - Bloquear a rolagem de fundo enquanto o menu mobile estiver aberto.

2. **Galeria com experiência completa**
   - Transformar a visualização ampliada em um diálogo acessível.
   - Adicionar navegação por teclado: setas para anterior/próxima e Escape para fechar.
   - Manter o foco dentro da visualização e restaurá-lo ao fechar.
   - Bloquear a rolagem de fundo e exibir a identificação da imagem atual.
   - Garantir que títulos e descrições também apareçam em dispositivos sem hover.

3. **Acessibilidade e controles**
   - Padronizar foco visível em links, filtros, setas, menu e demais controles.
   - Marcar corretamente filtros, navegação ativa, avaliações e estados expandidos.
   - Melhorar a operação por teclado do comparador antes/depois e dos seletores da página Marketing.
   - Revisar contraste dos textos secundários mantendo a paleta petróleo e branco.

4. **Movimento e transições**
   - Fazer animações em React respeitarem a preferência de movimento reduzido, além da proteção já existente no CSS.
   - Reduzir deslocamentos e escalas onde possam causar desconforto, mantendo o estilo cinematográfico.
   - Evitar mudanças bruscas de layout em galerias, depoimentos e painéis alternáveis.

5. **Carregamento e estabilidade visual**
   - Definir dimensões ou proporções estáveis para imagens abaixo da primeira tela.
   - Manter carregamento prioritário apenas nas imagens de abertura e lazy loading nas demais.
   - Revisar o peso das imagens e gerar versões otimizadas quando houver ganho real, sem alterar enquadramento ou qualidade percebida.

6. **Validação final**
   - Testar as duas páginas em desktop e mobile.
   - Validar menu, âncoras, galeria, comparador, depoimentos, campanhas, estudos de caso e calculadora.
   - Verificar navegação somente por teclado, movimento reduzido, ausência de overflow, imagens quebradas e erros no navegador.

## Fora deste estágio
- Envio e armazenamento real do formulário.
- Agenda persistente, painel administrativo, autenticação, CRM, métricas reais ou conteúdo gerenciado.
- Alterações de textos, imagens, ordem das seções ou identidade visual.

## Observação atual
O formulário de contato hoje apenas mostra uma confirmação local; a calculadora e os painéis de Marketing usam dados demonstrativos. Eles serão preservados como experiências de interface até a futura etapa de backend.
