import type { SelectProps } from 'ant-design-vue';

export const listType: SelectProps['options'] =  [
    {
        value: 'web',
        label: 'сайт',
      },
      {
        value: 'email',
        label: 'почта',
      },
      {
        value: 'instagram',
        label: 'инстаграмм',
      },
]

export const listLang =  [
    {
      value: 'RU',
      label: 'RU',
    },
    {
      value: 'KZ',
      label: 'KZ',
    },
    {
      value: 'EN',
      label: 'EN',
    },
]