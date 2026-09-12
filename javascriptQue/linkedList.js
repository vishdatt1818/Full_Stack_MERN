// class singlyLingedLisht{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }
//     push(val){
//         var newNode = new Node(val)
//         if(!this.head){
//             this.head = newNode
//             this.tail = this.head
//         }else{
//             this.tail = newNode
//             this.tail = newNode
//         }
//         this.length++
//         return this
//     }
// }

class List {
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head
        this.size = 1
    }
    appendNode(nodeData){
        let newNode = {
            value:nodeData,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }
    traversing(){
        let counter = 0 
        let currentNode = this.head
        while(counter < this.size){
            console.log(currentNode);
            currentNode = currentNode.next
            counter++
            
        }

    }
    deleteNode(index){
        let counter = 1
        let lead = this.head
        if(index === 1){
            this.head = this.head.next
        }else{
            while(counter < index-1){
                lead = lead.next
                counter++
            }
            let nextNode = lead.next.next
            lead.next =  nextNode
            console.log(lead);
            
        }
    }

    insertNode(index,value){
        let counter = 1
        let currentNode = this.head
        while(counter<index){
            counter++
            currentNode = currentNode.next

        }
        let nextNode = currentNode.next
        currentNode.next = {
            value:value,
            next: nextNode
        }
    }
    searchNode(data){
        let result = undefined
        let lead =this.head
        let loop = true
        while(loop){
            lead = lead.next
            loop = !!lead
            if(loop && lead.value === data){
                loop = false
                result = lead
            }
        }
        console.log(result);
        

    }
}
let list = new List(200)
list.appendNode(300)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)
// console.log(list);
// list.traversing()
// list.deleteNode(2)
// console.log(list);
list.searchNode(300)
// console.log(list);





