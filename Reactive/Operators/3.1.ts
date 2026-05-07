import { from, filter, map } from "rxjs";

interface Product {
    name: string;
    priceUsd: number;
}

const products: Product[] = [
    { name: "Навушники Sony", priceUsd: 49.99 },
    { name: "Клавіатура Logitech", priceUsd: 129.00 },
    { name: "Монітор LG 27\"", priceUsd: 399.00 },
    { name: "USB-хаб Anker", priceUsd: 35.00 },
    { name: "Веб-камера Logitech", priceUsd: 149.00 },
    { name: "Килимок для миші", priceUsd: 18.00 },
    { name: "SSD Samsung 1TB", priceUsd: 110.00 }
];

from(products).pipe(
    filter(p => p.priceUsd > 100),
    map(p => `${p.name} -- ${(p.priceUsd * 41.5).toFixed(2)} грн (є в наявності)`)
).subscribe(console.log);