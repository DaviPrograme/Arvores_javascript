/*
 * Para simular uma estrutura em arvore a classe "node" abaixo é utilizada 
 * Os valores que são maiores que 'this.value' ficam armazedados no 'this.right'
 * e os valores menores ficam no 'this.left'
 */
class node {
    constructor(vle) {
        this.value = vle;
        this.right = undefined;
        this.left = undefined;
    }
}


/*  
 * A função "addNode" serve para adicionar novos nodes a arvore.
 * Ela recebe como parâmetro a raiz da arvore e o numero que 
 * gostaria de adicionar a mesma.
 * 
 * Como funciona: de forma iterativa, a função analisa o 
 * valor que gostariamos de adicionar à arvore com o nó
 * que estamos analisando naquele momento, se o "num" for maior
 * que nó.value ele se desloca para o nó.right, caso contrario 
 * se desloca para o nó.left. Esse processo se repete até que ela 
 * encontre um nó vazio, nesse momento ela instância a classe node 
 * com o valor passado como parametro para função e o aloca neste espaço. 
 * Caso a função note que o valor já existe na arvore ela NÃO adiciona 
 * o valor à arvore. 
 */
function addNode(root, num){
    let ver = 0
    let aux;
    let nodeCurrent = root;

    while (!ver) {
        if (num > nodeCurrent.value) {
            if (!nodeCurrent.right){
                nodeCurrent.right = new node(num);
                ver = 1;
            }
            else {
                aux = nodeCurrent.right;
                nodeCurrent = aux;
            }
        }
        else if (num < nodeCurrent.value) {
            if (!nodeCurrent.left) {
                nodeCurrent.left = new node(num);
                ver = 1;
            }
            else {
                aux = nodeCurrent.left;
                nodeCurrent = aux;
            }
        }
        else {
            console.log("Já existe um node com esse valor!!!")
            break;
        }
    }
    (ver) ? console.log("Node Adicionado com Sucesso!!!") : 0;
}



//______________________________________________________________//
//                 TREE TRAVERSAL: START                        //
//______________________________________________________________//

/*
 * Tree Traversal são formas de conseguir "visitar" todos os nodes 
 * de uma arvore. Abaixo segue as três formas mais utilizadas
 */

 /*
  * PRE-ORDER: de forma recursiva, neste metodo ele primeiro printa 
  * o valor do nó atual, depois se desloca para o nó da esquerda e 
  * depois para nó da direita. Podemos afirmar também que este algoritmo 
  * avalia a arvore da sua raiz até chegar em suas folhas, da esquerda 
  * para direita.
  */
function preOrder(raiz) {
    console.log(raiz.value);
    (raiz.left) ? preOrder(raiz.left) : 0;
    (raiz.right) ? preOrder(raiz.right) : 0;
}

/*
 * IN-ORDER: de forma recursiva, este algoritmo avalia a arvore analisando 
 * primeiro todos os valores que estão do lado esquerdo, depois avalia 
 * o valor corrente e, por ultimo, avalia todos os valores a direita. Ao 
 * contrario do que acontece no preOrder, no inOrder a avaliação acontece 
 * da folha posicionada mais extrema a esquerda para a direita.
 */
function inOrder(raiz) {
    (raiz.left) ? preOrder(raiz.left) : 0;
    console.log(raiz.value);
    (raiz.right) ? preOrder(raiz.right) : 0;
}

/*
 * POS-ORDER: de forma recursiva, este algoritmo avalia a arvore analisando 
 * primeiro todos os valores que estão do lado esquerdo, depois avalia 
 * todos os valores a direita e, por ultimo, avalia o valor corrente. De 
 * forma muito parecida que acontece no inOrder, no posOrder a avaliação 
 * acontece da folha posicionada mais extrema a esquerda para a direita.
 */
function posOrder(raiz) {
    (raiz.left) ? preOrder(raiz.left) : 0;
    (raiz.right) ? preOrder(raiz.right) : 0;
    console.log(raiz.value);
}
//______________________________________________________________//
//                   TREE TRAVERSAL: END                        //
//______________________________________________________________//


/*
 * A função heightTree serve para calcular a altura da arvore
 * passando como parametro a raiz, ela descobre qual é o caminho 
 * entre a raiz e a folha mais distante, e retorna este valor. 
 * Esta função é derivada da função posOrder. 
 */
function heightTree(root){
    let hLeft = 0;
    let hRight = 0;

    (root.left) ? hLeft = heightTree(root.left) : 0;
    (root.right) ? hRight = heightTree(root.right) : 0;
    if (hLeft >= hRight) return hLeft + 1;
    return hRight + 1;
}


/*
 * A função searchNode serve para encontrar um node especifico em uma 
 * arvore. Para isso, ele recebe como parametro a raiz da arvore e o 
 * numero que estamos buscando. Ela retorna o nó especifico caso o 
 * encontre, caso contrario a função retorna uma string dizendo que 
 * não encontrou o elemento.  
 */
function searchNode(root, num) {
    let nodeCurrent = root;
    let aux;

    while (nodeCurrent){
        if (num == nodeCurrent.value) break;
        else if (num > nodeCurrent.value) {
            aux = nodeCurrent.right;
            nodeCurrent = aux;
        }
        else {
            aux = nodeCurrent.left;
            nodeCurrent = aux;
        }
    }
    return nodeCurrent || "Node não encontrado";
}

let raiz = new node(15)
addNode(raiz, 8);
addNode(raiz, 23);
addNode(raiz, 2);
addNode(raiz, 12);
addNode(raiz, 20);
addNode(raiz, 30);
addNode(raiz, 1)

console.log(searchNode(raiz, 2))
