export const response_200 = {
  id: 'qwerty123456',
  type: 'browser',
  request_url: 'https://account.novasoftworks.com/self-service/settings/browser',
  ui: {
    action: 'https://account.novasoftworks.com/self-service/settings?flow=qwerty123456',
    method: 'POST',
    nodes: [
      {
        type: 'input',
        group: 'default',
        attributes: {
          name: 'csrf_token',
          type: 'hidden',
          value: 'qwerty123456',
          required: true,
          disabled: false,
          node_type: 'input'
        },
        messages: []
      },
      {
        type: 'input',
        group: 'profile',
        attributes: {
          name: 'traits.email',
          type: 'email',
          value: 'jamiedoe@email.com',
          required: true,
          autocomplete: 'email',
          disabled: false,
          node_type: 'input'
        },
        messages: []
      },
      {
        type: 'input',
        group: 'profile',
        attributes: {
          name: 'traits.name.first',
          type: 'text',
          value: 'Jamie',
          required: true,
          disabled: false,
          node_type: 'input'
        },
        messages: []
      },
      {
        type: 'input',
        group: 'profile',
        attributes: {
          name: 'traits.name.last',
          type: 'text',
          value: 'Doe',
          disabled: false,
          node_type: 'input'
        },
        messages: []
      },
      {
        type: 'input',
        group: 'profile',
        attributes: {
          name: 'method',
          type: 'submit',
          value: 'profile',
          disabled: false,
          node_type: 'input'
        },
        messages: []
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
        messages: []
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
        messages: []
      }
    ]
  },
  state: 'show_form'
};
