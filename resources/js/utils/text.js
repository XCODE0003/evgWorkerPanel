/**
 * Сокращает длинный адрес/хеш, оставляя начальные и конечные символы
 * @param {string} address - Полный адрес для сокращения
 * @param {number} startChars - Количество символов в начале (по умолчанию 4)
 * @param {number} endChars - Количество символов в конце (по умолчанию 5)
 * @returns {string} Сокращенный адрес в формате "0x1234...5678"
 */
function shortenAddress(address, startChars = 4, endChars = 5) {
    if (!address) return '';
    
    // Проверяем, достаточно ли длинный адрес для сокращения
    if (address.length <= startChars + endChars + 3) {
      return address;
    }
    
    // Получаем начальные и конечные символы
    const start = address.substring(0, startChars);
    const end = address.substring(address.length - endChars);
    
    // Возвращаем сокращенный адрес
    return `${start}...${end}`;
  }

export { shortenAddress };