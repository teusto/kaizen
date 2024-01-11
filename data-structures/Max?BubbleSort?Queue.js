// Computing the Maximum of Integer Sequences

function max(arrayOfInt){
    for(var i = 0; i < arrayOfInt.length -1; i++){
        if(arrayOfInt[i] > arrayOfInt[i+1]){
            var temp = arrayOfInt[i];
            arrayOfInt[i] = arrayOfInt[i+1];
            arrayOfInt[i+1] = temp;
        }
    }
    var maxValue = arrayOfInt[ arrayOfInt.length - 1]
    return maxValue;
}

// Bubble Sorting Algorithm

function bubbleSort(arrayOfInt){
    for(var i = 0; i < arrayOfInt.length -1; i++){
        for(var j = 0; j < arrayOfInt.length -i-1; j++){
            if(arrayOfInt[j] > arrayOfInt[j+1]){
                var flag = arrayOfInt[j];
                arrayOfInt[j] = arrayOfInt[j+1];
                arrayOfInt[j+1] = flag;
            }
        }
    }
}

// QUEUE

class Node{
    constructor(data, prev, next){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    getData(){
        return this.data;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    offer(element){
        if(this.head == null){
            this.head = new Node(element);
            this.tail = this.head;
        } else {
            let newNode = new Node(element);
            newNode.next = this.tail;
            this.tail.prev = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    poll(){
        let p = this.head;
        if(p == null) return null
        this.head = this.head.prev;

        p.next = null;
        p.prev = null;

        this.size--;
        return p;
    }

    size(){
        return this.size;
    }
}