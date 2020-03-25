import getCardProvider from '../js/getCardProvider'
import { TestScheduler } from 'jest'



test('should recognize MasterCard', () => {
    const cardNumber = 5374986426855166;
    const result = getCardProvider(cardNumber)
    expect(result).toBe('MasterCard');
})

test('should recognize Visa', () => {
    const cardNumber = 4569889002269869;
    const result = getCardProvider(cardNumber)
    expect(result).toBe('Visa')
})


test('Should recognize American Express', () => {
    const cardNumber = 374189976011428;
    const result = getCardProvider(cardNumber)
    expect(result).toBe('American Express')
})

test('Should recognize Discover', () => {
    const cardNumber = 6011419780641177;
    const result = getCardProvider(cardNumber)
    expect(result).toBe('Discover')
})

test('Should recognize JCB', () => {
    const cardNumber = 3558571337704746;
    const result = getCardProvider(cardNumber)
    expect(result).toBe('JCB')
})


test('Should mark number as incorrect', () => {
    const cardNumber = 123;
    const result = getCardProvider(cardNumber)
    expect(result).toBe('Incorrect number')
})

test('Should throw if provider cannot be recognized', () => {
    const cardNumber = 30569309025904;
    expect(() => {
        getCardProvider(cardNumber)
    }).toThrow('Cannot recognize card provider')
})