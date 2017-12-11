/**
 * 通过 decorate 来解决，页面卸载时，不执行 SetState
 */
export default (unmount = 'unmounted') => (target, name, desc) => {
  const fun = desc.value;
  desc.value = function (...rest) {
    if(!this[unmount]) {
      fun.apply(this, rest);
    }
  };
}
