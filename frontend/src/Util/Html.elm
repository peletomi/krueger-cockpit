module Util.Html where

import Html exposing (Attribute)
import Html.Attributes exposing (classList)
import String exposing (split)

classes: String -> Attribute
classes cls = classList (List.map (\c -> (c, True)) (split " " cls))
