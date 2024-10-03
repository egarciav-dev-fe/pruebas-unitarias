import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  it('snapshot de HTML', () => {
    const wrapper = mount(AboutView)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
