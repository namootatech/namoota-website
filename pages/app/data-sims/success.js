import { useParams } from 'next/navigation';
import { getOrder, updateOrder } from '@/util/orders';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CreditCard, Smartphone, Truck } from 'lucide-react';
import { set } from 'ramda';
import { addSimcard } from '@/util/simcards';

const randomstr = (length) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let randomstring = '';
  for (let i = 0; i < length; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

export default function AppPage() {
  const [order, setOrder] = useState(null);
  const { paymentId, orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const order = await getOrder(orderId);
      if (order) {
        if (order.paymentId === paymentId) {
          await updateOrder(orderId, { status: 'paid', paymentId });
        }
      }
      setOrder(order);
    };
    fetchOrder();
  }, [orderId, paymentId]);

  const createSimCards = (selected) => {
    return selected.map(async (s) => {
      const type = s.split('-')[0];
      const size = s.split('-')[1];
      const sim = {
        uniqueId: 'SIM-' + randomstr(6),
        type,
        size,
        number: '0000000000',
        status: 'in-development',
        lastUpdated: new Date(),
      };
      await addSimcard(sim);
      return { id: sim.uniqueId, type, size };
    });
  };

  useEffect(() => {
    if (order) {
      const simcards = createSimCards(order.selected);
      order.simcards = simcards;
      updateOrder(order.id, order);
      setOrder(order);
    }
  }, [order]);

  return (
    <div className='container mx-auto px-6 py-8'>
      <h3 className='text-gray-700 text-3xl font-medium'>Order Success</h3>
      <div className='container mx-auto px-4 py-8'>
        <Card className='max-w-2xl mx-auto'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div>
                <CardTitle className='text-2xl'>Order Successful</CardTitle>
                <CardDescription>Thank you for your purchase!</CardDescription>
              </div>
              <CheckCircle className='h-10 w-10 text-green-500' />
            </div>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-sm font-medium text-gray-500'>Order ID</p>
                <p className='text-lg font-semibold'>{order.readableId}</p>
              </div>
              <Badge
                variant={order.status === 'pending' ? 'outline' : 'default'}
              >
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>SIM Cards</h3>
              <ul className='space-y-2'>
                {order.simcards.map((sim) => (
                  <li key={sim.id} className='flex items-center'>
                    <Smartphone className='h-5 w-5 mr-2 text-gray-400' />
                    <span>{sim.number}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>
                Delivery Information
              </h3>
              <div className='flex items-center'>
                <Truck className='h-5 w-5 mr-2 text-gray-400' />
                <span>{order.deliveryId}</span>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
              <div className='flex items-center'>
                <CreditCard className='h-5 w-5 mr-2 text-gray-400' />
                <span>{order.paymentMethod}</span>
              </div>
            </div>

            <div className='text-sm text-gray-500'>
              Last updated: {order.lastUpdated.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
