function linkedList() {
  let head = null;
  let tail = null;
  let size = 0;
  let current = null;

  const append = function (value) {
    let newNode = node(value);

    if (!head) {
      head = newNode;
      current = head;
    } else {
      current = head;
      while (current.getNext()) {
        current = current.getNext();
      }
      current.setNext(newNode);
    }

    tail = newNode;

    size++;
  };

  const prepend = function (value) {
    let newNode = node(value);
    if (head) {
      newNode.setNext(head);
    }
    head = newNode;

    size++;
  };

  const pop = () => {
    if (size == 0) {
      head = null;
    } else {
      let beforeCurrent = atIndex(size - 2);
      beforeCurrent.setNext(null);
    }
    size--;
  };

  const getHead = () => head;
  const getTail = () => tail;
  const find = (val) => {
    for (let i = 0; i < size; i++) {
      if (atIndex(i).getValue() == val) {
        return i;
      }
    }
    return null;
  };

  const contains = (val) => {
    current = head;
    while (current.getValue()) {
      if (current.getValue() == val) {
        return true;
      }
      current = current.getNext();
    }
    return false;
  };

  const atIndex = (index) => {
    let nodeAtIndex = head;
    if (!index == 0) {
      for (let i = 1; i <= index; i++) {
        nodeAtIndex = nodeAtIndex.getNext();
      }
    }
    return nodeAtIndex;
  };

  const toString = () => {
    current = head;
    let str = `( ${current.getValue()} )->`;
    while (current.getNext()) {
      current = current.getNext();
      str = str + `( ${current.getValue()} )->`;
    }
    str = str + "null";
    return str;
  };

  const insertAt = (val, index) => {
    let newNode = node(val);
    let nodeAfter = atIndex(index);
    atIndex(index-1).setNext(newNode)
    newNode.setNext(nodeAfter);
    
    size++
  };

  const removeAt = (index) => {
    if (index == 0) {
      head.setNext(null)
      head = atIndex(1);
    } else {
      let nodeToRemove = atIndex(index)
      atIndex(index - 1).setNext(atIndex(index+1));
      nodeToRemove.setNext(null)
    }
    size--
  }

  return {
    append,
    prepend,
    getHead,
    getTail,
    atIndex,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  };
}

const node = function (val = null) {
  let value = val;
  let next = null;
  const getValue = () => value;
  const getNext = () => next;
  const setNext = (node) => (next = node);

  return {
    getValue,
    getNext,
    setNext,
  };
};
