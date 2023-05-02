import Layout from '@/components/Layout';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProduct, setGotoProduct] = useState('');

    const router = useRouter();
    async function createProduct(ev) {
        ev.preventDefault();
        const data = {title, description, price}
        await axios.post('/api/products', data);
        setGotoProduct(true);
    }
    if (goToProduct) {
        router.push('/products')
    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product name</label>
                <input
                    type="text"
                    placeholder='product name'
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <label>Descriptions</label>
                <textarea
                    placeholder='description'
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
                <label>Price (USD)</label>
                <input
                    type="number"
                    placeholder='price'
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}
                />
                <button type='submit' className='btn-primary'>Save</button>
            </form>
            
           
        </Layout>
    )
}