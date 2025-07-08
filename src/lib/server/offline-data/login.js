export const flow = {
  ui: {
    action: '/',
    method: 'get',
    nodes: [
      {
        attributes: {
          name: 'identifier',
          type: 'text',
          required: true,
          value: '',
          label: 'Email or Username',
          placeholder: 'Enter your email or username'
        },
        messages: [],
        group: 'default',
        type: 'input'
      },
      {
        attributes: {
          name: 'password',
          type: 'password',
          required: true,
          value: '',
          label: 'Password',
          placeholder: 'Enter your password'
        },
        messages: [],
        group: 'default',
        type: 'input'
      }
    ],
    messages: []
  }
};
