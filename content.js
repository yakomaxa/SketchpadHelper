(function() {
  let isKeyPressed = false;
  const drawKey = 'Shift';  // 描画のトリガーとなるキー（ここではShiftキーを使用）

  document.addEventListener('keydown', (e) => {
    if (e.key === drawKey) {
      isKeyPressed = true;
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === drawKey) {
      isKeyPressed = false;
      // キーを離したときに描画を終了
      document.dispatchEvent(new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (isKeyPressed) {
      // キーが押されている間、マウスの動きを描画動作に変換
      const mouseDownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: e.clientX,
        clientY: e.clientY
      });
      e.target.dispatchEvent(mouseDownEvent);
    }
  });
})();
