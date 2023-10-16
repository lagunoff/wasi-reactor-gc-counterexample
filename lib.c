#include <stdio.h>
#include <HsFFI.h>
#include <Rts.h>

STATIC_INLINE void hs_init_with_rtsopts_(char *argv[]) {
  int argc;
  for (argc = 0; argv[argc] != NULL; ++argc) {
  }
  hs_init_with_rtsopts(&argc, &argv);
}

// Enable sanity checks to gather data for crash reports
void hs_init_with_sanity_checks() {
  char *argv[] = {"uknown.wasm", "+RTS", "-DS", "-RTS", NULL};
  hs_init_with_rtsopts_(argv);
}
