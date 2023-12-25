// increment бери наш глобальний state по ключу 'counter' та робить з ним маніпуляції (додає + 1)
export const incrementAction = (state) => { state.value += 1 };
export const decrementAction = (state) => { state.value -= 1 };
// Для передавання даних, нам потрібний 2-ий параметр, а саме 'action'
export const incrementByAmountAction = (state, action) => { state.value += action.payload } // payload - саме те, що ми передаємо при виклиці цієї функції