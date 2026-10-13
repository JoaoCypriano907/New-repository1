import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        exibirBoasVindas();

        boolean executando = true;

        while (executando) {

            exibirMenu();

            System.out.print("\nEscolha uma opção (ou 0 para sair): ");

            if (!entrada.hasNextInt()) {

                System.out.println("\nPor favor, digite apenas números válidos.");

                entrada.next();

                continue;
            }

            int opcao = entrada.nextInt();

            System.out.println();

            switch (opcao) {

                case 1 -> exibirJogos();

                case 2 -> exibirTreinos();

                case 3 -> exibirUniformes();

                case 4 -> exibirInformacoesClube();

                case 5 -> exibirPerfil();

                case 0 -> {

                    System.out.println(
                            "Obrigado por utilizar o sistema do NOS POR NÓS! 🏀"
                    );

                    executando = false;
                }

                default -> System.out.println(
                        "Opção inválida! Tente novamente."
                );
            }
        }

        entrada.close();
    }


    private static void exibirBoasVindas() {

        System.out.println("==========================================");

        System.out.println("          NOS POR NÓS 🏀");

        System.out.println("==========================================");

        System.out.println("Bem-vindo ao nosso time!");

        System.out.println(
                "Localização: Vila Cruzeiro - Campo do Ordem"
        );

        System.out.println(
                "Treinos: Segunda-feira e Quarta-feira"
        );
    }


    private static void exibirMenu() {

        System.out.println("\n==========================================");

        System.out.println("             MENU PRINCIPAL");

        System.out.println("==========================================");

        System.out.println("1 - Jogos");

        System.out.println("2 - Treinos");

        System.out.println("3 - Uniformes");

        System.out.println("4 - Informações do clube");

        System.out.println("5 - Perfil / Contato");

        System.out.println("0 - Sair");
    }


    private static void exibirJogos() {

        System.out.println("===== JOGOS =====");

        System.out.println(
                "Próximo jogo: NOS POR NÓS x Adversário"
        );

        System.out.println("Data: 20/09/2026");

        System.out.println("Horário: 15:00");

        System.out.println("Local: Rio de Janeiro");
    }


    private static void exibirTreinos() {

        System.out.println("===== TREINOS =====");

        System.out.println(
                "Dias: Segunda-feira e Quarta-feira"
        );

        System.out.println("Horário: 18:00 - 20:00");

        System.out.println(
                "Local: Vila Cruzeiro - Campo do Ordem"
        );
    }


    private static void exibirUniformes() {

        System.out.println("===== UNIFORMES =====");

        System.out.println(
                "Manto Principal: Preto e Amarelo"
        );

        System.out.println(
                "Manto Reserva: Branco"
        );

        System.out.println(
                "Lançamento da nova coleção em breve!"
        );
    }


    private static void exibirInformacoesClube() {

        System.out.println("===== NOS POR NÓS =====");

        System.out.println(
                "Projeto social e clube de basquete."
        );

        System.out.println(
                "Missão: Basquete, união, evolução e inclusão social."
        );
    }


    private static void exibirPerfil() {

        System.out.println(
                "===== INFORMAÇÕES DE CONTATO ====="
        );

        System.out.println(
                "Clube: NOS POR NÓS"
        );

        System.out.println(
                "Endereço: Vila Cruzeiro - Campo do Ordem"
        );

        System.out.println(
                "Email: contato@nospornos.org"
        );
    }
}