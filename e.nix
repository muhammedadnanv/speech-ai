{ pkgs ? import <nixpkgs> {} }:
let
  myFirstNixScript = { inherit (pkgs) hello; };
in
  myFirstNixScript
