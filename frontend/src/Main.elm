module Main where

import Html exposing (..)
import StartApp.Simple exposing (start)
import Set as S

import App.Domain as D
import View.MainView exposing (..)

-- type alias Model = List D.AppInfo
--
-- type Action = OpenAppGroupInfo
--
-- update : Action -> Model -> Model
-- update action model = model
--
-- -- view : Signal.Address Action -> Model -> Html
-- -- view address model = viewMain

main =
  start
    { model = mockModel
    , update = updateMain
    , view = viewMain
    }

mockAppInfo id num = { applicationId = id, ip = "192.168.2." ++ toString num }
mockAppGroupInfo id = { applicationId = id, appInfo = List.map (\n -> mockAppInfo id n) [1,2,3,4,5,6,7,8]}
mockModel = { appGroupInfo = (List.map mockAppGroupInfo ["paco", "product availibility", "reporting"]), openedIds = (S.insert "" S.empty) }
