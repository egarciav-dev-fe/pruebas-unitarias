import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PostsView from '@/views/PostsView.vue'

const postsDummy = [
  { id: 1, name: 'Post 1' },
  { id: 2, name: 'Post 2' },
  { id: 3, name: 'Post 3' },
  { id: 4, name: 'Post 4' }
]

describe('PostsView', () => {
  it('trae lista de posts', async () => {
    const wrapper = mount(PostsView)

    console.log(wrapper.vm)
    console.log(wrapper.vm.posts)

    wrapper.vm.posts = postsDummy

    await wrapper.vm.$nextTick()
    console.log(wrapper.vm.posts)

    expect(wrapper.findAll('li')).toHaveLength(4)
  })
})
