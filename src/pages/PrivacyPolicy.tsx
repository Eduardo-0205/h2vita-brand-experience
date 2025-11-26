import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container-custom section-padding pt-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground mb-12">
              Última atualização: Janeiro de 2025
            </p>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  1. Introdução
                </h2>
                <p className="mb-4">
                  A H2Vita respeita a sua privacidade e está comprometida em proteger os seus dados pessoais. 
                  Esta Política de Privacidade explica como recolhemos, usamos, armazenamos e partilhamos as suas 
                  informações quando utiliza o nosso website e serviços.
                </p>
                <p>
                  Ao utilizar os nossos serviços, concorda com a recolha e utilização de informações de acordo 
                  com esta política.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  2. Informações que Recolhemos
                </h2>
                <h3 className="font-display text-xl font-medium mb-3 mt-6">
                  2.1 Informações Fornecidas por Si
                </h3>
                <p className="mb-3">Podemos recolher as seguintes informações quando:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Cria uma conta no nosso website</li>
                  <li>Efetua uma compra ou subscrição</li>
                  <li>Preenche formulários de contacto</li>
                  <li>Subscreve a nossa newsletter</li>
                  <li>Participa em inquéritos ou promoções</li>
                </ul>
                <p className="mb-3">Estas informações podem incluir:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome completo</li>
                  <li>Endereço de email</li>
                  <li>Número de telefone</li>
                  <li>Morada de entrega e faturação</li>
                  <li>Informações de pagamento</li>
                  <li>Preferências de produtos e frequência de entrega</li>
                </ul>

                <h3 className="font-display text-xl font-medium mb-3 mt-6">
                  2.2 Informações Recolhidas Automaticamente
                </h3>
                <p className="mb-3">Quando visita o nosso website, podemos recolher automaticamente:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Endereço IP e informações do dispositivo</li>
                  <li>Tipo de navegador e sistema operativo</li>
                  <li>Páginas visitadas e tempo de navegação</li>
                  <li>Origem de referência (website anterior)</li>
                  <li>Cookies e tecnologias semelhantes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  3. Como Utilizamos as Suas Informações
                </h2>
                <p className="mb-3">Utilizamos os seus dados pessoais para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Processar e entregar os seus pedidos</li>
                  <li>Gerir a sua conta e subscrição</li>
                  <li>Comunicar consigo sobre encomendas, entregas e atualizações</li>
                  <li>Fornecer suporte ao cliente</li>
                  <li>Personalizar a sua experiência no website</li>
                  <li>Enviar newsletters e comunicações de marketing (com o seu consentimento)</li>
                  <li>Melhorar os nossos produtos e serviços</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                  <li>Prevenir fraudes e garantir a segurança</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  4. Partilha de Informações
                </h2>
                <p className="mb-3">
                  A H2Vita não vende os seus dados pessoais. Podemos partilhar as suas informações com:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Prestadores de Serviços:</strong> empresas que nos ajudam a operar o website, 
                    processar pagamentos, realizar entregas e fornecer suporte ao cliente
                  </li>
                  <li>
                    <strong>Parceiros de Marketing:</strong> apenas com o seu consentimento explícito
                  </li>
                  <li>
                    <strong>Autoridades Legais:</strong> quando exigido por lei ou para proteger os nossos direitos
                  </li>
                  <li>
                    <strong>Sucessores Empresariais:</strong> em caso de fusão, aquisição ou venda de ativos
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  5. Cookies e Tecnologias Semelhantes
                </h2>
                <p className="mb-4">
                  Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência de navegação, 
                  analisar o tráfego do website e personalizar conteúdo.
                </p>
                <p className="mb-3">Os cookies que utilizamos incluem:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Cookies Essenciais:</strong> necessários para o funcionamento básico do website
                  </li>
                  <li>
                    <strong>Cookies de Desempenho:</strong> ajudam-nos a entender como os visitantes interagem com o website
                  </li>
                  <li>
                    <strong>Cookies de Funcionalidade:</strong> permitem-nos lembrar as suas preferências
                  </li>
                  <li>
                    <strong>Cookies de Marketing:</strong> utilizados para apresentar publicidade relevante
                  </li>
                </ul>
                <p className="mt-4">
                  Pode gerir as suas preferências de cookies nas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  6. Segurança dos Dados
                </h2>
                <p className="mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus 
                  dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Estas medidas incluem:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encriptação de dados sensíveis (SSL/TLS)</li>
                  <li>Controlos de acesso rigorosos</li>
                  <li>Monitorização regular de segurança</li>
                  <li>Formação de funcionários em proteção de dados</li>
                </ul>
                <p className="mt-4">
                  No entanto, nenhum método de transmissão pela internet é 100% seguro, e não podemos garantir 
                  segurança absoluta.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  7. Retenção de Dados
                </h2>
                <p>
                  Mantemos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas 
                  nesta política, salvo se um período de retenção mais longo for exigido ou permitido por lei. 
                  Quando os dados já não forem necessários, eliminamo-los de forma segura.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  8. Os Seus Direitos
                </h2>
                <p className="mb-3">
                  De acordo com o Regulamento Geral de Proteção de Dados (RGPD), tem os seguintes direitos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Direito de Acesso:</strong> solicitar uma cópia dos seus dados pessoais
                  </li>
                  <li>
                    <strong>Direito de Retificação:</strong> corrigir dados incorretos ou incompletos
                  </li>
                  <li>
                    <strong>Direito ao Apagamento:</strong> solicitar a eliminação dos seus dados ("direito a ser esquecido")
                  </li>
                  <li>
                    <strong>Direito à Limitação do Tratamento:</strong> restringir o processamento dos seus dados
                  </li>
                  <li>
                    <strong>Direito à Portabilidade:</strong> receber os seus dados em formato estruturado
                  </li>
                  <li>
                    <strong>Direito de Oposição:</strong> opor-se ao processamento dos seus dados
                  </li>
                  <li>
                    <strong>Direito de Retirar Consentimento:</strong> a qualquer momento, sem afetar a legalidade 
                    do processamento anterior
                  </li>
                </ul>
                <p className="mt-4">
                  Para exercer qualquer um destes direitos, contacte-nos através de{" "}
                  <a href="mailto:privacidade@h2vita.pt" className="text-primary hover:underline">
                    privacidade@h2vita.pt
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  9. Transferências Internacionais
                </h2>
                <p>
                  Os seus dados podem ser transferidos e mantidos em servidores localizados fora do seu país de 
                  residência, onde as leis de proteção de dados podem diferir. Ao utilizar os nossos serviços, 
                  concorda com esta transferência. Garantimos que implementamos salvaguardas adequadas para proteger 
                  os seus dados de acordo com esta política.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  10. Menores de Idade
                </h2>
                <p>
                  Os nossos serviços não se destinam a menores de 18 anos. Não recolhemos intencionalmente dados 
                  pessoais de menores. Se tomar conhecimento de que recolhemos dados de um menor sem verificação 
                  do consentimento parental, tomaremos medidas para eliminar essas informações.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  11. Alterações a Esta Política
                </h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações 
                  significativas através do website ou por email. Recomendamos que reveja esta política regularmente 
                  para se manter informado sobre como protegemos os seus dados.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">
                  12. Contacto
                </h2>
                <p className="mb-4">
                  Se tiver questões sobre esta Política de Privacidade ou sobre como tratamos os seus dados pessoais, 
                  contacte-nos:
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:privacidade@h2vita.pt" className="text-primary hover:underline">
                      privacidade@h2vita.pt
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Email Geral:</strong>{" "}
                    <a href="mailto:hello@h2vita.pt" className="text-primary hover:underline">
                      hello@h2vita.pt
                    </a>
                  </p>
                  <p>
                    <strong>Encarregado de Proteção de Dados:</strong> dpo@h2vita.pt
                  </p>
                </div>
                <p className="mt-4">
                  Tem também o direito de apresentar uma queixa à Comissão Nacional de Proteção de Dados (CNPD) 
                  se considerar que o tratamento dos seus dados pessoais viola o RGPD.
                </p>
              </section>
            </div>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
