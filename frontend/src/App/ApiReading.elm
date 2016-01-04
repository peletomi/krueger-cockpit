module App.ApiReading where

import Json.Decode exposing (list)

import Http exposing (get)
import App.Domain exposing (appGroupInfoDecoder)

applications = get (list appGroupInfoDecoder) "/api/applications"