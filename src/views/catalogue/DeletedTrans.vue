<template>
  <deleted-transaction
  :action="action"
  :exports="exports"
  :filter="filter"
  :statusInfo="statusInfo"
  :tableData="tableData"
  ></deleted-transaction>
</template>

<script>
import DeletedTransaction from '@/components/DeletedTransaction';
export default {

  components: {
    DeletedTransaction
  },

  data() {
    return {
      phone: true,
      country: true,
      fullName: false,
      orderId: false,
      customerId: false,
      remarks: false,
      company: false,
      appartmentNum: false,
      rent: false,
      gatewayRes: false,
      status: 'unpaid',
      seen: '',
      emailSeen: '',
      action: [
        {
          icon: 'restore_from_trash',
          label: 'Restore'
        },
        {
          icon: 'delete',
          label: 'Delete'
        }
      ],
      exports: {
        selField: [
          {
            model: this.phone,
            label: 'Phone'
          },
          {
            model: this.country,
            label: 'Country'
          },
          {
            model: this.fullName,
            label: 'Full Name'
          },
          {
            model: this.orderID,
            label: 'Order ID | Invoice No | Boo'
          },
          {
            model: this.customerID,
            label: 'Customer ID'
          },
          {
            model: this.remarks,
            label: 'Remarks'
          },
          {
            model: this.company,
            label: 'Company'
          },
          {
            model: this.appartmentNum,
            label: 'Appartment Number'
          },
          {
            model: this.rent,
            label: 'Rent for month'
          }
        ],
        select: [
         { model: this.gatewayRes,
          label: 'Gateway Response'}
        ],
      },
      filter: [
        {
          model: this.status,
          name: 'status',
          placeholder: 'Status',
          values: [
            {
              label: 'Attempted',
              value: 'attempted'
            },
            {
              label: 'Canceled',
              value: 'canceled'
            },
            {
              label: 'Created',
              value: 'created'
            },
            {
              label: 'Invalid',
              value: 'invalid'
            },
            {
              label: 'Paid',
              value: 'paid'
            },
            {
              label: 'Pending',
              value: 'pending'
            },
            {
              label: 'Unpaid',
              value: 'unpaid'
            },
          ]
        },
        {
          model: this.seen,
          name: 'seen',
          placeholder: 'Seen',
          values: [
            {
              label: 'Yes',
              value: 'yes'
            }, 
            {
              label: 'No',
              value: 'no'
            },
          ]
        },
         {
          model: this.emailSeen,
          name: 'emailSeen',
          placeholder: 'Email Seen',
          values: [
            {
              label: 'Yes',
              value: 'yes'
            }, 
            {
              label: 'No',
              value: 'no'
            },
          ]
        }
      ],
      statusInfo: {
        propertise: {
          status: '50',
          statusColor: 'orange',
          category: 'Last Upate: 11:59 AM',
          title: 'Active Leases'
        },
        unit: {
          status: '6',
          statusColor: 'orange',
          category: 'Last Upate: 11:59 AM',
          title: 'Future Leases'
        },
        ocuppied: {
          status: '58',
          statusColor: 'orange',
          category: 'Last Upate: 11:59 AM',
          title: 'Blocked Leases'
        },
        vacant: {
          status: '31',
          statusColor: 'orange',
          category: 'Last Upate: 11:59 AM',
          title: 'Expired Leases'
        }
      },
        tableData: [
         {
            id: 1,
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            firstName: 'Fawzi Almatouq',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 2,
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            firstName: 'Fawzi Almatouq',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 3,
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            firstName: 'Fawzi Almatouq',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 4,
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            firstName: 'Fawzi Almatouq',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 5,
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            firstName: 'Fawzi Almatouq',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 6,
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            firstName: 'Fawzi Almatouq',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 7,
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            firstName: 'Fawzi Almatouq',
            phone: '+96551533333',
            actions: ''
          },
      ]
    }
  }
  
}
</script>