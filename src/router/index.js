import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard';
import Create from '@/views/payment/Create';
import Rent from '@/views/Rent';
import Leases from '@/views/Leases';
import LeaseEdit from '@/views/LeaseEdit';
import Invoice from '@/views/Invoice';
import Payer from '@/views/Payer';
import Inbox from '@/views/Inbox';
import Report from '@/views/Report';
import PaymentTrans from '@/views/payment/Trans';
import PaymentDeletedTrans from '@/views/payment/DeletedTrans';
import Upload from '@/views/bulk/Upload';
import BulkTrans from '@/views/bulk/Trans';
import BulkDeletedTrans from '@/views/bulk/DeletedTrans';
import CustomerTrans from '@/views/customerPayment/Trans';
import CustomerDeletedTrans from '@/views/customerPayment/DeletedTrans';
import CatalogueTrans from '@/views/catalogue/Trans';
import CatalogueDeletedTrans from '@/views/catalogue/DeletedTrans';
import EcommerceTrans from '@/views/ecommerce/Trans';
import EcommerceDeletedTrans from '@/views/ecommerce/DeletedTrans';
import ShopifyTrans from '@/views/shopify/Trans';
import ShopifyDeletedTrans from '@/views/shopify/DeletedTrans';
import EventTrans from '@/views/events/Trans';
import EventDeletedTrans from '@/views/events/DeletedTrans';
import EventBookings from '@/views/events/Bookings';
import EventCreate from '@/views/events/Create';
import EventBulkCreate from '@/views/events/BulkCreate';
import EventFullfilment from '@/views/events/Fullfilment';
import Help from '@/views/Help';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () =>
            import ( /* webpackChunkName: "Signin" */ '../views/Signin.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/payment/create',
        name: 'Payment',
        component: Create
    },
    {
        path: '/payment/transactions',
        name: 'PaymentTransactions',
        component: PaymentTrans
    },
    {
        path: '/payment/deleted-transactions',
        name: 'PaymentsDeletedTransactions',
        component: PaymentDeletedTrans
    },
    {
        path: '/bulk/upload',
        name: 'Upload',
        component: Upload
    },
    {
        path: '/bulk/transactions',
        name: 'BulkTransactions',
        component: BulkTrans
    },
    {
        path: '/bulk/deleted-transactions',
        name: 'BulkDeletedTransactions',
        component: BulkDeletedTrans
    },
    {
        path: '/customer_payment/transactions',
        name: 'CustomerTransactions',
        component: CustomerTrans
    },
    {
        path: '/customer_payment/deleted-transactions',
        name: 'CustomerDeletedTransactions',
        component: CustomerDeletedTrans
    },
    {
        path: '/catalogue/transactions',
        name: 'CatalogueTransactions',
        component: CatalogueTrans
    },
    {
        path: '/catalogue/deleted-transactions',
        name: 'CatalogueDeletedTransactions',
        component: CatalogueDeletedTrans
    },
    {
        path: '/ecommerce/transactions',
        name: 'EcommerceTransactions',
        component: EcommerceTrans
    },
    {
        path: '/ecommerce/deleted-transactions',
        name: 'EcommerceDeletedTransactions',
        component: EcommerceDeletedTrans
    },
    {
        path: '/shopify/transactions',
        name: 'ShopifyTransactions',
        component: ShopifyTrans
    },
    {
        path: '/shopify/deleted-transactions',
        name: 'ShopifyDeletedTransactions',
        component: ShopifyDeletedTrans
    },
    {
        path: '/propertise',
        name: 'Ottu Rent',
        component: Rent
    },
    {
        path: '/leases',
        name: 'Leases',
        component: Leases
    },
    {
        path: '/leases/:id',
        name: 'LeasesDetail',
        component: LeaseEdit
    },
    {
        path: '/invoices',
        name: 'Invoice',
        component: Invoice
    },
    {
        path: '/payers',
        name: 'Payers',
        component: Payer
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: Inbox
    },
    {
        path: '/reports',
        name: 'Reports',
        component: Report
    },
    //{
    //  path: '*',
    //  redirect: '/dashboard'
    //}
    {
        path: '/events/transactions',
        name: 'EventTransactions',
        component: EventTrans
    },
    {
        path: '/events/deleted-transactions',
        name: 'EventDeletedTransactions',
        component: EventDeletedTrans
    },
    {
        path: '/events/bookings',
        name: 'EventBookings',
        component: EventBookings
    },
    {
        path: '/events/create',
        name: 'EventCreate',
        component: EventCreate
    },
    {
        path: '/events/bulk-create',
        name: 'EventBulkCreate',
        component: EventBulkCreate
    },
    {
        path: '/events/fullfilment',
        name: 'EventFullfilment',
        component: EventFullfilment
    },
    {
        path: '/help',
        name: 'Help',
        component: Help
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;