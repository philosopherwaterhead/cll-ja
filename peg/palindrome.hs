{-# LANGUAGE QuasiQuotes #-}

import System.Environment
import Text.Papillon

main :: IO ()
main = do
	arg : _ <- getArgs
	case runError . palindrome $ parse arg of
		Right (r, _) -> print r
		Left _ -> putStrLn "parse error"

[papillon|

palindrome :: String
	= c0 p:palindrome c1:[c1 == c0] { c0 : p ++ [c1] } / { "" }

|]
