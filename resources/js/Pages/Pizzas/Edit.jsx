import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdatePizzaOrderForm from './Partials/UpdatePizzaOrderForm';

export default function Dashboard({ auth, pizza }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order #{pizza.id}</h2>}
        >
            <Head title={'Order #' + pizza.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white sm:p-8 overflow-hidden shadow-sm sm:rounded-lg">
                        <UpdatePizzaOrderForm pizza={pizza} className="max-w-xl"></UpdatePizzaOrderForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
