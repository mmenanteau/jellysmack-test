import { shallowMount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput'

describe('SearchInput', () => {
  it('should display placeholder', () => {
    // Given
    const placeholder = 'a placeholder'
    const wrapper = shallowMount(SearchInput, {
      propsData: { placeholder }
    })
    // When
    const input = wrapper.find('[data-test="input"]')
    // Then
    expect(input.attributes('placeholder')).toEqual(placeholder)
  })

  it('should display button text', () => {
    // Given
    const buttonText = 'Test'
    const wrapper = shallowMount(SearchInput, {
      propsData: { buttonText }
    })
    // When
    const button = wrapper.find('[data-test="button"]')
    // Then
    expect(button.text()).toEqual(buttonText)
  })

  describe('on click on button', () => {
    it('should emit search with input value', () => {
      // Given
      const value = 'name'
      const wrapper = shallowMount(SearchInput, {
        data: () => ({ value })
      })
      const button = wrapper.find('[data-test="button"]')
      // When
      button.trigger('click')
      // Then
      expect(wrapper.emitted('search')[0]).toEqual([value])
    })
  })
})
