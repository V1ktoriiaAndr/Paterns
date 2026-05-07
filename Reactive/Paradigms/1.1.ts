enum Status { DELIVERED = 'DELIVERED', PENDING = 'PENDING', CANCELLED = 'CANCELLED' }
interface Order { id: string; status: Status; amount: number; }

const orders: Order[] = [
    { id: 'O-001', status: Status.DELIVERED, amount: 1500.00 },
    { id: 'O-002', status: Status.PENDING,   amount: 300.00 },
    { id: 'O-003', status: Status.CANCELLED,  amount: 75.00 },
    { id: 'O-004', status: Status.DELIVERED,  amount: 2200.00 },
    { id: 'O-005', status: Status.PENDING,    amount: 450.00 },
    { id: 'O-006', status: Status.DELIVERED,  amount: 980.00 }
];

let count = 0;
const totalDelivered = orders.filter(order => order.status === Status.DELIVERED).reduce((acc, order) => acc + order.amount, 0);
console.log(totalDelivered);