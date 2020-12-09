Class node:
    def __init__ (self, data):
        self.next = None;
        self.data = data;
    def getData(self):
        return self.data;
    def getNext(self):
        return self.next;
    def setData()

# input = head 1-2-3-4-none -> 1-2-3-4-New_head ->
# outout = reversedlinklist New_head-4-3-2-1


new_head = None
while head:
    next =  head.next
    head.next = new_head
    new_head = head
    head= next
print(new_head)


