export const preparePayload = (payload) => {
  const { top, left, width: targetWidth, height } = payload.targetElement.getBoundingClientRect()
  const targetRect = { top, left, width: targetWidth, height }
  return {
    targetSelector: payload.targetSelector,
    placement: payload.placement,
    paddingX: payload.paddingX,
    paddingY: payload.paddingY,
    backgroundColor: payload.backgroundColor,
    width: payload.width,
    borderRadius: payload.borderRadius,
    spacingX: payload.spacingX,
    spacingY: payload.spacingY,
    targetRect,
  }
}
