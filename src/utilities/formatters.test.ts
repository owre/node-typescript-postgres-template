import { formatString } from '@/utilities/formatters.js'
import { describe, expect, test } from 'vitest'

describe('stringFormatter', () =>
  test('format', () =>
    expect(formatString('this template is awesome')).toEqual(
      't_h_i_s_-_t_e_m_p_l_a_t_e_-_i_s_-_a_w_e_s_o_m_e',
    )))
