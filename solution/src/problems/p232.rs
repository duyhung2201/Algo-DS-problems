#[derive(Debug)]
pub(crate) struct Stack<T> {
    elements: Vec<T>,
}

impl<T> Stack<T> {
    fn new() -> Self {
        Stack {
            elements: Vec::new(),
        }
    }

    fn push(&mut self, item: T) {
        self.elements.push(item);
    }

    fn pop(&mut self) -> Option<T> {
        self.elements.pop()
    }

    fn peek(&self) -> Option<&T> {
        self.elements.last()
    }

    fn is_empty(&self) -> bool {
        self.elements.is_empty()
    }

    fn size(&self) -> usize {
        self.elements.len()
    }
}

pub(crate) struct MyQueue {
    push_stack: Stack<i32>,
    pop_stack: Stack<i32>,
}

impl MyQueue {
    fn new() -> Self {
        MyQueue {
            push_stack: Stack::new(),
            pop_stack: Stack::new(),
        }
    }

    fn push(&mut self, x: i32) {
        while !self.pop_stack.is_empty() {
            self.push_stack.push(self.pop_stack.pop().unwrap());
        }
        self.push_stack.push(x);
    }

    fn _move_to_pop_stack(&mut self) {
        while !self.push_stack.is_empty() {
            self.pop_stack.push(self.push_stack.pop().unwrap());
        }
    }

    fn pop(&mut self) -> i32 {
        self._move_to_pop_stack();
        self.pop_stack.pop().unwrap()
    }

    fn peek(&mut self) -> i32 {
        self._move_to_pop_stack();
        self.pop_stack.peek().unwrap().clone()
    }

    fn empty(&self) -> bool {
        self.pop_stack.is_empty() && self.push_stack.is_empty()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_my_queue() {
        let mut queue = MyQueue::new();
        queue.push(1);
        queue.push(2);
        assert_eq!(queue.peek(), 1);
        assert_eq!(queue.pop(), 1);
        assert_eq!(queue.empty(), false);
        assert_eq!(queue.pop(), 2);
        assert_eq!(queue.empty(), true);
    }
}
