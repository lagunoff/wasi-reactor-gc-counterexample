{-# LANGUAGE ForeignFunctionInterface #-}
{-# LANGUAGE ImportQualifiedPost #-}
{-# LANGUAGE TypeApplications #-}
import System.Mem
import Data.Function
import Data.List qualified as List

foreign export ccall perform_major_gc :: IO ()

perform_major_gc = performMajorGC

foreign export ccall generate_garbage :: Int -> Int

generate_garbage len =
  [0..len]
    & fmap (show @Int)
    & fmap read
    & List.foldl' (+) 0

main = return ()
