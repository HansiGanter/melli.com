{
  description = "melli.com";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    nix2container.url = "github:nlewo/nix2container";
    nix2container.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { self, nixpkgs, flake-utils, nix2container }:
    flake-utils.lib.eachDefaultSystem (system:
      with nixpkgs.legacyPackages.${system};
      {
        devShell = mkShell {
          nativeBuildInputs = [ bashInteractive ];
          buildInputs = [
            nodejs-16_x
            nodePackages.pnpm
          ];
        };
        packages.container =
          with nix2container.packages.x86_64-linux.nix2container;
          buildImage
            {
              name = "docker.meetap.de/melli.com";
              tag = "latest";
              copyToRoot = [
                (pkgs.buildEnv {
                  name = "root";
                  paths = [ code-server nodePackages.pnpm ];
                  pathsToLink = [ "/bin" ];
                })
              ];
              config = {
                Cmd = [ "/bin/code-server" "--bind-addr" "0.0.0.0:8080" ];
              };
            };
      }
    );
}

