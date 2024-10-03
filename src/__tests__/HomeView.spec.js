import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('snapshot de HTML', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
