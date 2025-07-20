export const flow = {
  id: '952bf867-a244-42b6-96bc-3d2635588a48',
  type: 'browser',
  expires_at: '2025-07-20T10:10:18.893023338Z',
  issued_at: '2025-07-20T09:10:18.893023338Z',
  request_url: 'https://account.novasoftworks.com/self-service/registration/browser',
  ui: {
    action: 'https://account.novasoftworks.com/self-service/registration?flow=952bf867-a244-42b6-96bc-3d2635588a48',
    method: 'POST',
    nodes: [
      {
        type: 'input',
        group: 'default',
        attributes: {
          name: 'csrf_token',
          type: 'hidden',
          value: 'drHiDpq55DCBM31sL29sJoixFoi5wT2bAueH4iZJbZp1D0LfhrasF1FgKkOaCpskCDxZY0/XQgZs+FzrkfqHJQ==',
          required: true,
          disabled: false,
          node_type: 'input'
        },
        messages: [],
        meta: {}
      },
      {
        type: 'input',
        group: 'password',
        attributes: {
          name: 'traits.email',
          type: 'email',
          required: true,
          autocomplete: 'email',
          disabled: false,
          node_type: 'input'
        },
        messages: [],
        meta: {}
      },
      {
        type: 'input',
        group: 'password',
        attributes: {
          name: 'password',
          type: 'password',
          required: true,
          autocomplete: 'new-password',
          disabled: false,
          node_type: 'input'
        },
        messages: [],
        meta: {
          label: {
            id: 1070001,
            text: 'Password',
            type: 'info'
          }
        }
      },
      {
        type: 'input',
        group: 'password',
        attributes: {
          name: 'traits.name.first',
          type: 'text',
          required: true,
          disabled: false,
          node_type: 'input'
        },
        messages: [],
        meta: {}
      },
      {
        type: 'input',
        group: 'password',
        attributes: {
          name: 'traits.name.last',
          type: 'text',
          disabled: false,
          node_type: 'input'
        },
        messages: [],
        meta: {}
      },
      {
        type: 'input',
        group: 'password',
        attributes: {
          name: 'method',
          type: 'submit',
          value: 'password',
          disabled: false,
          node_type: 'input'
        },
        messages: [],
        meta: {
          label: {
            id: 1040001,
            text: 'Sign up',
            type: 'info'
          }
        }
      }
    ]
  },
  organization_id: null,
  state: 'choose_method'
};
