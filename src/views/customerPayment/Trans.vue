<template>
  <transaction
  :action="action"
  :exports="exports"
  :filter="filter"
  :statusInfo="statusInfo"
  :tableData="tableData"
  ></transaction>
</template>

<script>
import Transaction from '@/components/Transaction';
export default {

  components: {
    Transaction
  },

  data() {
    Transaction
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
      gateway: 'migsoman',
      currency: 'USD',
      createdBy: 'alaa',
      seen: '',
      emailSeen: '',
         action: [
        {
          icon: 'cancel',
          label: 'Cancel'
        },
        {
          icon: 'check',
          label: 'AcKnowledge'
        },
        {
          icon: 'publish',
          label: 'Dosclose to merchant'
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
          model: this.gateway,
          name: 'gateway',
          placeholder: 'Gateway',
          values: [
            {
              label: 'Benefits',
              value: 'benefits'
            }, 
            {
              label: 'Credit Card MIGS',
              value: 'credit'
            },
            {
              label: 'Credit Card ',
              value: 'creditCard'
            },
            {
              label: 'KNET AI Nasser',
              value: 'knet'
            },
            {
              label: 'LVMPGS',
              value: 'lvmpgs'
            },
            {
              label: 'MIGSOMAN',
              value: 'migsoman'
            },
            {
              label: 'MIGS Dior',
              value: 'migsDior'
            },
            {
              label: 'Omannet',
              value: 'omannet'
            }
          ]
        },
        {
          model: this.currency,
          name: 'currency',
          placeholder: 'Currency',
          values: [
            {
              label: 'USD',
              value: 'USD'
            }, 
            {
              label: 'EUR',
              value: 'EUR'
            },
          ]
        },
        {
          model: this.createdBy,
          name: 'createdBy',
          placeholder: 'Created by',
          values: [
            {
              label: 'admin',
              value: 'admin'
            }, 
            {
              label: 'kcurumm',
              value: 'kcurumm'
            },
          ]
        },
        {
          model: this.unit,
          name: 'unit',
          placeholder: 'Unit',
          values: [
            {
              label: 'AAW Comercial',
              value: 'aaw'
            }, 
            {
              label: 'Aayan Kuwait Auto',
              value: 'kuwait'
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
            initiator: "harmard",
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            fullName: 'Fawzi Almatouq',
            invoice: '123',
            orderId: 'Sadaka-13-12-2020',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 2,
            initiator: "harmard",
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            fullName: 'Fawzi Almatouq',
            invoice: '123',
            orderId: 'Sadaka-13-12-2020',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 3,
            initiator: "harmard",
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            fullName: 'Fawzi Almatouq',
            invoice: '123',
            orderId: 'Sadaka-13-12-2020',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 4,
            initiator: "harmard",
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            fullName: 'Fawzi Almatouq',
            invoice: '123',
            orderId: 'Sadaka-13-12-2020',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 5,
            initiator: "harmard",
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            fullName: 'Fawzi Almatouq',
            invoice: '123',
            orderId: 'Sadaka-13-12-2020',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 6,
            initiator: "harmard",
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            fullName: 'Fawzi Almatouq',
            invoice: '123',
            orderId: 'Sadaka-13-12-2020',
            phone: '+96551533333',
            actions: ''
          },
          {
            id: 7,
            initiator: "harmard",
            email: 'almatouq@mftk.org',
            state: 1,
            gateway: 'benefits',
            amount: '50.000',
            fee: '',
            currency: 'USD',
            createDate: '2020-11-20', 
            paymentDate: '2020-10-20',
            unit: 'Islamic Heritage Society',
            fullName: 'Fawzi Almatouq',
            invoice: '123',
            orderId: 'Sadaka-13-12-2020',
            phone: '+96551533333',
            actions: ''
          },
      ]
    }
  }
  
}
</script>